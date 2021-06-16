<template>
  <div>
    <v-dialog v-model="dialog_answer" width="500">
      <v-card style="padding: 1rem">
        <v-form ref="form_com_children" v-model="valid" lazy-validation>
          <v-textarea
            v-model="comment_text_children"
            label="Оставить комментарий"
            :rules="[(v) => !!v || 'Не может быть пустым']"
            counter
            maxlength="500"
            full-width
            single-line
            required
          ></v-textarea>
          <v-btn
            :disabled="!ontextchildren"
            class="mr-4"
            @click="submit_comment_children"
          >
            отправить
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
      <v-card-text class="text-h5 font-weight-bold">
        <p v-if="comment.parent" style="text-align: left">
          ответ: user id{{ comment.user_parent }}
        </p>
        <div style="width: 100%; margin-bottom: 2rem; display: flex">
          <v-avatar size="36px">
            <img
              alt="Avatar"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
          </v-avatar>
          <span style="color: white; margin-left: 1rem"
            >user id : {{ comment.user_id.slice(0, 4) }}</span
          >
        </div>
        "{{ comment.text_comment }}"
        <v-alert v-if="alert_auth" class="alert-sign" dense type="warning"
          >Выполните вход!</v-alert
        >
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content> </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-calendar-blank </v-icon>
            {{ comment.updated.slice(0, 10) }}
          </v-row>
        </v-list-item>
      </v-card-actions>
      <v-card-actions>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <v-btn
            color="white lighten-2"
            text
            @click="onanswer(comment.id, comment.user_id, comment.object_id)"
          >
            <fa icon="comment-medical"></fa>
            ответить
          </v-btn>
          <v-btn
            color="white lighten-2"
            text
            @click="get_comments = !get_comments"
          >
            <span v-if="!get_comments"
              ><fa icon="comments"></fa> ({{ comment.children.length }})
            </span>
            <span v-if="get_comments && comment.children.length"
              >свернуть
            </span>
            <span v-if="get_comments && !comment.children.length"
              ><fa icon="comments"></fa> ({{ comment.children.length }})
            </span>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
    <div
      v-if="comment.children && comment.children.length"
      style="margin-top: 1rem"
    >
      <div v-if="get_comments">
        <div
          style="margin-top: 4rem"
          v-for="(comment_children, index) of comment.children"
          :key="index"
        >
          <Comments :comment="comment_children" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
const Cookie = process.client ? require("js-cookie") : undefined;

import Comments from "@/components/Comments";

export default {
  name: "Comments",
  props: ["comment"],
  data: () => ({
    isActive: false,

    rrr: false,
    valid: true,
    dialog_answer: false,
    alert_auth: false,
    get_comments: false,
    user_id: "",
    name_user: "",
    text_comment: "",
    user_parent: "",
    comment_text_children: "",
    object_id: null,
    parent: null,
  }),
  components: {
    Comments,
  },
  computed: {
    ontextchildren() {
      if (this.comment_text_children) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    submit_comment_children() {
      const data = {
        user_id: this.user_id,
        text_comment: this.comment_text_children,
        user_parent: this.user_parent,
        object_id: this.object_id,
        parent: this.parent,
        content_type: 8,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      this.$axios
        .$post("/api/comments/", data, {
          headers: headers,
        })
        .then(
          (response) => {
            // this.comments.unshift(response)
            this.comment["children"].unshift(response);
            this.get_comments = true;
            // this.comment.unshift(response);
            this.dialog_answer = false;
          },
          (error) => {
            console.log(error);
          }
        );
    },
    onanswer(parent, user_parent, object_id) {
      this.parent = parent;
      this.user_parent = user_parent;
      this.object_id = object_id;
      let name_user = this.$store.state.auth;
      if (name_user === null) {
        this.alert_auth = true;
        setTimeout(() => {
          this.alert_auth = false;
        }, 2000);
      } else {
        this.user_id = name_user.user_id;
        this.dialog_answer = !this.dialog_answer;
      }
    },
  },
};
</script>

<style scoped>
.card-comment {
  width: 70%;
  min-width: 70%;
}
@media (min-width: 500px) {
  .card-comment {
    width: 80%;
  }
}
.alert-sign {
  position: absolute;
  left: 20%;
  z-index: 1;
}
</style>