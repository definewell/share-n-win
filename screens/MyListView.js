import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'
import React, { Component } from 'react';
import { StyleSheet, Text, View , Image,SectionList , Header} from 'react-native';

export default class MyListView extends React.Component {

  constructor(props) {
    super(props)

    this.getItemLayout = sectionListGetItemLayout({
      // The height of the row with rowData at the given sectionIndex and rowIndex
      getItemHeight: (rowData, sectionIndex, rowIndex) => sectionIndex === 0 ? 100 : 50,

      // These four properties are optional
      getSeparatorHeight: () => 1 / PixelRatio.get(), // The height of your separators
      getSectionHeaderHeight: () => 20, // The height of your section headers
      getSectionFooterHeight: () => 10, // The height of your section footers
      listHeaderHeight: 40, // The height of your list header
    })
  }

  render() {
    return (
      <SectionList
      renderItem={({item}) => <ListItem title={item} />}
      renderSectionHeader={({section}) => <Header title={section.title} />}
      sections={[ // homogenous rendering between sections
        {data: ["a"], title: "b"}
      ]}
   
        getItemLayout={this.getItemLayout}

        />
     
    )
  }
}



;
