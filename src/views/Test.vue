<template>
  <div class="test">

  <v-card class="card">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="click(item.title)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <div>aa</div>
  </div>
</template>

<script src="./Test.ts"/>

<style lang="scss" scoped>
.test {
  width: 100vw;
  height: 100vh;
  border: solid 1px;
  display: flex;
  .card {
    min-width: 300px;
    height: 100%;
  }
}
</style>