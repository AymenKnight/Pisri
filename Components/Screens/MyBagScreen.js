import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import FormTitle from '../formComp/FormTitle'
import BagContainer from '../mybagComp/BagContainer'
import TotalBox from '../mybagComp/TotalBox'
import TopNavigation from "../navigation/topNavigation/TopNavigation";
import PrimaryButton from "../Basic/PrimaryButton";
import routes from '../navigation/routes'

const ini_data = [
  {
    productName: "Milk",
    image: require("../assets/milk.png"),
    productOptions: [
      {
        optionName: "mark",
        optionArray: [
          {
            value: "candia",
            label: "candia",
          },
          {
            value: "jus",
            label: "jus",
          },
          {
            value: "intel",
            label: "intel",
          },
        ],
      },
      {
        optionName: "litre",
        optionArray: [
          {
            value: "1L",
            label: "1L",
          },
          {
            value: "2L",
            label: "2L",
          },
          {
            value: "3L",
            label: "3L",
          },
        ],
      },
      {
        optionName: "dfdgdg",
      },
      {
        optionName: "dfdfgdg",
      },
    ],
  },
  {
    productName: "candia",
    image: require("../assets/milk.png"),
    productOptions: [
      {
        optionName: "mark",
        optionArray: [
          {
            value: "candia",
            label: "candia",
          },
          {
            value: "jus",
            label: "jus",
          },
          {
            value: "intel",
            label: "intel",
          },
        ],
      },
      {
        optionName: "litre",
        optionArray: [
          {
            value: "1L",
            label: "1L",
          },
          {
            value: "2L",
            label: "2L",
          },
          {
            value: "3L",
            label: "3L",
          },
        ],
      },
      {
        optionName: "dfdgdg",
      },
      {
        optionName: "dfdfgdg",
      },
    ],
  },
  {
    productName: "jus",
    image: require("../assets/milk.png"),
    productOptions: [
      {
        optionName: "mark",
        optionArray: [
          {
            value: "candia",
            label: "candia",
          },
          {
            value: "jus",
            label: "jus",
          },
          {
            value: "intel",
            label: "intel",
          },
        ],
      },
      {
        optionName: "litre",
        optionArray: [
          {
            value: "1L",
            label: "1L",
          },
          {
            value: "2L",
            label: "2L",
          },
          {
            value: "3L",
            label: "3L",
          },
        ],
      },
      {
        optionName: "dfdgdg",
      },
      {
        optionName: "dfdfgdg",
      },
    ],
  },
  {
    productName: "water",
    image: require("../assets/milk.png"),
    productOptions: [
      {
        optionName: "mark",
        optionArray: [
          {
            value: "candia",
            label: "candia",
          },
          {
            value: "jus",
            label: "jus",
          },
          {
            value: "intel",
            label: "intel",
          },
        ],
      },
      {
        optionName: "litre",
        optionArray: [
          {
            value: "1L",
            label: "1L",
          },
          {
            value: "2L",
            label: "2L",
          },
          {
            value: "3L",
            label: "3L",
          },
        ],
      },
      {
        optionName: "dfdgdg",
      },
      {
        optionName: "dfdfgdg",
      },
    ],
  },
];

export default function MyBagScreen({navigation}) {
  const [data, setdata] = useState(ini_data)
  const hundleDelete=(item)=>{
    setdata(data.filter((product)=>product.productName != item.productName))
  }
    return (
      <View style={styles.container}>
        <TopNavigation />
        <FormTitle title="My Bag " style={styles.title} />
        {data.length > 0 && (
          <BagContainer bagArray={data} hundleDelete={hundleDelete} />
        )}
        {data.length > 0 && <TotalBox num_items={data.length} tag="dzd" total="900" />}
        {data.length > 0 && <PrimaryButton title="checkout" width="88%" onPress={()=>{ navigation.navigate(routes.DELEVERY)  }} />}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 39,
    marginBottom:20,
    width:"88%",
    alignSelf:'center',
  },
});
