import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  private drawer = true;
  private items = [{ title: 'Home', icon: 'dashboard' }];


  private click(title: string) {
    console.log(title);
  }
  private mounted() {
    console.log('mounted');
  }
}
