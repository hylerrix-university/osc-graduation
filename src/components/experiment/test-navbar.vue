<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>  
          </template>
          <span>Sort project by person name</span>
        </v-tooltip>
        
      </v-layout>

      <v-card flat v-for="project in projects" :key=project.title>
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Person</div>
             <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Due by</div>
             <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
             <div class="right">
               <v-chip small :class="`${project.status} white--text caption my-2`">
                 {{project.status}}
               </v-chip>
             </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'TestNavbar',
})
export default class TestNavbar extends Vue {
  public projects: any =  [
          {title: 'Design a new website', person: 'AqingCyan', due: '11th April 2019', status: 'onging'},
          {title: 'Code up the homepage', person: 'Xuekaiqi', due: '11th April 2019', status: 'complete'},
          {title: 'Design video thumbnails', person: 'Cyan', due: '11th April 2019', status: 'onging'},
          {title: 'Wait a hr call', person: 'CyanAqing', due: '10th April 2019', status: 'overdue'},
        ]
  public sortBy(prop: any) {
        this.projects.sort((a: string, b: string) => {
          return a[prop] < b[prop] ? -1 : 1
        })
      }
}
</script>

<style scoped>
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }

  .project.onging {
    border-left: 4px solid orange;
  }

  .project.overdue {
    border-left: 4px solid tomato;
  }
  .v-chip.complete {
    background: #3cd1c2;
  }

  .v-chip.onging {
    background: #ffaa2c;
  }

  .v-chip.overdue {
    background: #f83e70;
  }
</style>