# popover-for-nisha


This repository/library provide you a modal based popover, which will open like modal but automatically change his position according to the referred component.

- ✨ Specially made for nisha ✨
- Android
- IOS
- Web

## Features

- Popver with transparent background
- Easy to  install
- Modal based popover
- Atomatic position based component

## Installation

```sh
npm install popover-for-nisha
```

For expo user environments...

```sh
expo install popover-for-nisha
```

## Example

```sh
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Popover } from 'popover-for-nisha'

export default function App() {

  const [modalRef, setModalRef] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Popover 
        modalVisible={modalVisible} 
        modalRef={modalRef} 
        style={{}} 
        setModalVisible={setModalVisible}
      >
          <View 
            style={{ 
              width: 180, 
              height: 100, 
              backgroundColor: "whitesmoke", 
              borderRadius: 10 
            }}
          >
            {/* Put your component there */}
          </View>
      </Popover>

      <TouchableOpacity 
        ref={ref => setModalRef(ref)} 
        onPress={() => setModalVisible(!modalVisible)}
      >
          <Text>Open up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

```

