import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Test2 extends Vue {
  private items = [{ title: 'Home', icon: 'dashboard' },
  { title: 'User Profile', icon: 'person' }];

  private firstCardItems = [
    {
      title: 'Daily Sales',
      desc: 'increase in today\' sales',
      time: 'updated 4minutes age',
    },
    {
      title: 'Email Subscription',
      desc: 'Last Campaign Performance',
      time: 'updated 10 minutes ago',
    },
    {
      title: 'Completed Tasks',
      desc: 'Last Last Campaign Performance',
      time: 'campaign sent 26 minutes ago',
    },
  ];

  private mounted() {
    console.log('2');
  }
}
