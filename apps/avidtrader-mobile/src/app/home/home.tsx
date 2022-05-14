/* eslint-disable jsx-a11y/accessible-emoji */
// import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useTailwind } from 'tailwind-rn'

// import Heart from '../icons/heart.svg'
/* eslint-disable-next-line */

const Home = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind("h-full items-center bg-gray-500 p-12 pt-40")}>
        <View style={tailwind("bg-white w-full p-6 rounded-lg items-center")}>
          <Text style={tailwind("text-gray-800 text-xl font-medium mt-4")}>
            {/* <Heart width={24} height={24} fill="rgba(252, 165, 165, 1)" /> */}
            <span role="img" aria-label="invoice">
              ✌
            </span>{" "}
            Welcome to Avid Trader Mobile
          </Text>
          <Text style={tailwind("text-gray-600 text-center mt-2 w-56")}>
            This is a mobile app for trading stocks and crypto currencies.
          </Text>
          <View
            style={tailwind(
              "bg-indigo-600 w-full py-2 items-center rounded-md mt-6"
            )}
          >
            <Text style={tailwind("text-white font-medium")}>
              <span role="img" aria-label="back-arrow">
                ⬅
              </span>{" "}
              Get Started
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
