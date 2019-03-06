<template>
  <div class="test">

    <v-navigation-drawer
      class="drawer"
      v-model="drawer"
      app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon>dashboard</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="tile-title">Vuetify MD</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider class="divider"></v-divider>

        <v-list-tile
        class="list-tile"
          v-for="item in items"
          :key="item.title"
          @click="click(item.title)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="tile-name">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-flex class="right"
    app>
      <v-toolbar class="toolbar">
        <v-layout class="page-name">Dashboard</v-layout>
        <v-spacer></v-spacer>
        <v-text-field class="text-field"
          hide-details
          label="Search..."
          color="purple"
        ></v-text-field>
        <v-btn icon>
          <v-icon>dashboard</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>alarm</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>account_circle</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid grid-list-sm app>
        <v-layout row wrap  align-content-end  xs3 md12 lg2>
          <v-flex d-flex>
            <v-card class="card" v-for="item in cardItems" :key="item.title">
              <div class="chart"></div>
              <div class="title">{{item.title}}</div>
              <div class="desc"> {{item.desc}}</div>
              <v-divider class="card-divider"></v-divider>
              <div class="time">{{item.time}}</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- <div v-for="item in cardItems" :key="item.title">
        <v-card class="card">
          <div class="chart"></div>
          <div class="title">{{item.title}}</div>
          <div class="desc"> {{item.desc}}</div>
          <v-divider class="divider"></v-divider>
          <div class="time">{{item.time}}</div>
        </v-card>
      </div> -->
    </v-flex>
  </div>
</template>

<script src="./Test.ts"/>

<style lang="scss" scoped>
.none-padding-right {
  padding-right: 0;
}
.none-padding-left {
  padding-left: 0;
}
.test {
  width: 100vw;
  height: 100vh;
  display: flex;
  
  .drawer {
    background: #777;
    // background-image: url("https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg");
    // background-position: center center;
  }
  .tile-title {
    color: white;
    font-weight: 400;
    font-size: 20px;
  }
  .divider {
    // width: calc(100% - 32px);
    margin: 0 16px 0 16px;
  }
  .list-tile {
    margin: 12px 16px 12px 16px;
    :hover {
      border-radius: 8px;
    }
    .tile-name {
      color: white;
      font-weight: 300;
    }
  }
  
  .right {
    height: 100%;
    background: rgba(0,0,0,0.02);
    padding: 0 20px;
    max-width: calc(100%-500px);
    .toolbar {
      height: 64px;
      box-shadow: none;
      width: 100%;
      padding: 0 16px !important;
      .page-name {
        font-size: 18px;
        font-weight: 300;
      }
      .text-field {
        width: 1px;
      }
    }
    .card {
      // 카드 위에 감싸는거에 이거 넣기 - 반응형
      //  @media screen and (max-width: 1300px) {
     // display: inline-block;
    // }
      margin: 80px 10px;
      height: 260px;
      border-radius: 4px;
      position: relative;
      .chart {
        position: absolute;
        left: 5%;
        top: -30px;
        width: 90%;
        height: 160px;
        background: green;
        border-radius: 8px;
      }
      .title {
        padding: 148px 20px 12px 20px;
        font-weight: 300;
        width: 100%;
      }
      .desc {
        width: 100%;
        padding: 0 20px;
        font-weight: 200;
      }
      .divider {
        width: calc(100%-40px);
        margin: 12px auto;
      }
      .card-divider {
        width: 90%;
        margin: 12px auto;
      }
      .time {
        padding: 0 20px;
        font-weight: 200;
      }
    }
  }
}
</style>