<template>
  <v-layout class="window">
    <v-navigation-drawer :width="260"
      class="drawer" app>
      <v-list>
        <v-list-tile
          avatar>
          <v-list-tile-avatar>
            <v-icon icon>dashboard</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title >Vuetify MD</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider class="divider"/>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          avatar
          class="list-item">
          <v-list-tile-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-content class="content-zone">
      <v-container class="container">
        <v-layout class="toolbar">
          <v-layout class="page-name">Dashboard</v-layout>
          <v-spacer></v-spacer>
          <v-text-field class="text-field"
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
            <v-icon>person</v-icon>
          </v-btn>
        </v-layout>
        
        <v-layout class="first-card">
          <v-flex class="card-wrapper" v-for="item in firstCardItems" :key="item.title" xs12>
            <v-card class="card">
              <div class="chart"></div>
              <div class="title">{{item.title}}</div>
              <div class="desc"> {{item.desc}}</div>
              <v-divider class="card-divider"></v-divider>
              <v-layout>
                <v-icon class="card-icon" icon>clock</v-icon>
                <div class="time">{{item.time}}</div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout class="second-card"></v-layout>
        <v-layout class="third-card"></v-layout>
      </v-container>
    </v-content>
    <v-footer class="footer"></v-footer>

  </v-layout>
</template>

<script src="./Test2.ts"/>


<style scoped lang="scss">
.window {
  .drawer {
    background: #555;
    .divider {
      width: 85%;
      margin: 0 auto;
    }
    .list-item {
      width: 90%;
      margin: 10px auto;
      border-radius: 8px;
      :hover {
        border-radius: 8px;
        background: #777;
        cursor: pointer;
      }
    }
  }
  .content-zone {
    padding: 0 !important;
    // max-width: calc(100% - 260px) !important;
    .container {
      padding: 20px 0px 0 24px;
    }
    .toolbar {
      height: 64px;
      box-shadow: none;
      margin-bottom: 40px;
      // padding: 0 16px !important;
      .page-name {
        font-size: 18px;
        font-weight: 300;
      }
    }

    .first-card {
      border: solid 2px;
      padding: 52px 0;
      .card-wrapper {
        .card {
          margin: 0px auto;
          padding: 36px 0 0 0;
          width: 80%;
          height: 300px;
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
            padding: 8px 20px;
            font-weight: 200;
          }
          .card-divider {
            width: 90%;
            margin: 0 auto;
          }
          .time {
            padding: 8px 20px;
            font-weight: 200;
          }
          .card-icon {
            font-size: 16px;
          }
        } 
    }
    .second-card {
        width: 100px;
        background: blue;
      }
    }
    

   
  }
   .footer {
      background: green;
    }

}
.flex{
  display: flex;
}

</style>