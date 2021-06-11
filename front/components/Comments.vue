<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >

    <v-card-text class="text-h5 font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-calendar-blank
          </v-icon>
         25-03-2021
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>


<script>
import Comments from "@/components/Comments";
export default {
  name: "Comments",
  props: ["comments", "onsendComentParent"],
  data: () => ({
    isActive: false,
    rrr: false,
  }),
  components: {
    Comments,
  },
};
</script>

<style scoped>
.card-comment{
  width: 70%;
  min-width: 70%;
}
@media (min-width:500px){
  .card-comment{
  width: 80%;
}
}
.box-card{
  /* display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column; */
 
}



</style>