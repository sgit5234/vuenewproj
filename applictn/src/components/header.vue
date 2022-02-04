<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="indigo darken-2"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 10000px;"></v-container>
    </v-sheet> -->
  </v-card>

  
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>


</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://happimobiles.s3.amazonaws.com/retool-upload/007749b7-9cb4-44e7-ab90-97e5a81d9ed6.png',
          },
          {
            src: 'https://happimobiles.s3.amazonaws.com/retool-upload/007749b7-9cb4-44e7-ab90-97e5a81d9ed6.png',
          },
          {
            src: 'https://happimobiles.s3.amazonaws.com/retool-upload/007749b7-9cb4-44e7-ab90-97e5a81d9ed6.png',
          },
          {
            src: 'https://happimobiles.s3.amazonaws.com/retool-upload/007749b7-9cb4-44e7-ab90-97e5a81d9ed6.png',
          },
        ],
      }
    },
  }
</script>