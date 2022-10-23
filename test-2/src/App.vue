<template>
    <v-container>
        <TheTable/>
    </v-container>
</template>

<script>
import TheTable from "@/components/Table";

export default {
  name: 'App',

  components: {
      TheTable,
  },

  data: () => ({
    //
  }),
}
</script>
