import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Text, Image, Linking} from 'react-native';
import {Navigation} from 'react-native-navigation';


const appIcon = require('../img/app-icon-120x120.png');

export default class MenuScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={appIcon} style={styles.image}/>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarsPress.bind(this)}>
          <Text style={styles.menuText}>Mahavir Jayanti 2020</Text>
        </TouchableOpacity>

        {/*<TouchableOpacity style={styles.menu} onPress={this.onCalendarsPress.bind(this)}>*/}
        {/*  <Text style={styles.menuText}>Calendars</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.menu} onPress={this.onCalendarListPress.bind(this)}>*/}
        {/*  <Text style={styles.menuText}>Calendar List</Text>*/}
        {/*</TouchableOpacity>*/}
        <TouchableOpacity style={styles.menu} onPress={this.onHorizontalCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Future events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
          <Text style={styles.menuText}>Today Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={()=>{ Linking.openURL('https://jainsocietyofseattle.org/donations/')} }>
          <Text style={styles.menuText}>Donate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onContactUS.bind(this)}>
          <Text style={styles.menuText}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAboutPress.bind(this)}>
          <Text style={styles.menuText}>About us</Text>
        </TouchableOpacity>
        {/*<TouchableOpacity style={styles.menu} onPress={this.onExpandablePress.bind(this)}>*/}
        {/*  <Text style={styles.menuText}>Expandable Calendar</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.menu} onPress={this.onWeekPress.bind(this)}>*/}
        {/*  <Text style={styles.menuText}>Week Calendar</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    );
  }

  pushScreen(screen, props) {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        passProps: props,
        options: {
          topBar: {
            title: {
              text: screen
            },
            backButton: {
              showTitle: false, // iOS only
              color: Platform.OS === 'ios' ? '#2d4150' : undefined
            }
          }
        }
      }
    });
  }

  onCalendarsPress() {
    this.pushScreen('Calendars');
  }

  // onCalendarListPress() {
  //   this.pushScreen('CalendarsList');
  // }

  onHorizontalCalendarListPress() {
    this.pushScreen('HorizontalCalendarList');
  }

  onContactUS() {
    this.pushScreen('ContactUS');
  }

  onDonate() {
    this.pushScreen('Donate');
  }
  onAboutPress() {
    this.pushScreen('AboutUs');
  }

  onAgendaPress() {
    this.pushScreen('Agenda');
  }

  // onExpandablePress() {
  //   this.pushScreen('ExpandableCalendar');
  // }
  //
  // onWeekPress() {
  //   this.pushScreen('ExpandableCalendar', {weekView: true});
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    margin: 30,
    width: 90,
    height: 90
  },
  menu: {
    width: 300,
    padding: 10,
    margin: 10,
    // backgroundColor: '#f2F4f5',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7a92a5'
  },
  menuText: {
    fontSize: 18,
    color: '#2d4150'
  }
});
