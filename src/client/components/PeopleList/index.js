import React, { Component } from 'react'
import People from '../People'
import Search from '../Search'

export default class PeopleList extends Component {
  render() {
    return (
      <div class="people-list" id="people-list">
        <Search />
        <ul class="list">
          <People />
        </ul>
      </div>
    )
  }
}
