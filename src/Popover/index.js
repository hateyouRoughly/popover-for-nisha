import React, { useState, useEffect } from "react";
import { Modal, View, Dimensions, TouchableOpacity } from "react-native";

//const window = Dimensions.get("window");
const window = Dimensions.get("screen");

export default function(props) {

    const [modalRef, setModalRef] = useState(null);
    const [leftMargin, setLeftMargin] = useState(null);
    const [topMargin, setTopMargin] = useState(null);

    //console.log(modalRef);

    useEffect(() => {

        if(props.modalRef && modalRef){
            props.modalRef.measure( (pfx, pfy, pwidth, pheight, ppx, ppy) => {
                modalRef.measure( (fx, fy, width, height, px, py) => {

                    const x = window.width-ppx;
                    const y = window.height-ppy;

                    if(x > width + 20){
                        setLeftMargin(ppx);
                    }else{
                        setLeftMargin(ppx - width)
                    }

                    if(y > height + 20){
                        setTopMargin(ppy);
                    }else{
                        setTopMargin(ppy - height);
                    }

                })
            })
        } 
    });

    return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            props.setModalVisible(!props.modalVisible);
          }}
        >
            <TouchableOpacity onPress={() => props.setModalVisible(!props.modalVisible)} style={{ flex:1 }}>
                <TouchableOpacity onPress={() => props.setModalVisible(!props.modalVisible)} ref={ref => setModalRef(ref)} style={[{ alignSelf:"flex-start", marginLeft: leftMargin ? leftMargin : 0, marginTop: topMargin ? topMargin : 0 }, props.style]}>
                    { props.children }
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}