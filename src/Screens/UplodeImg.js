import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const UplodeImg = () => {

    const [image, setimg] = useState([])
    const [imagecamera, SetImages] = useState("")

    const imagepick = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
        }).then(images => {
            SetImages(images.path)
        });
    }

    const pickMultiple = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpeg: true,
        })
            .then((images) => {
                setimg(images)
            })
            .catch((e) => alert(e));
    }

    const renderdatass = () => {
        if (imagecamera == "") {
            return (
                null
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={styles.cmstyle}>
                        <View style={styles.imgview}>
                            <Image source={{
                                uri: imagecamera
                            }} style={{ width: 150, height: 150, borderRadius: 10 }} />
                        </View>
                    </View>
                </View>
            )
        }

    }


    const renderSection = () => {

        if (image == "" && imagecamera == "") {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                    <Text style={{ fontSize: 50, color: '#0E79B2', marginLeft: 50 }}>No Photos </Text>
                </View>

            )
        } else {
            return image.map((img, i) => {
                console.log(img.path)
                return (
                    <View style={styles.cmstyle}>
                        <View style={styles.imgview}>
                            <Image source={{
                                uri: img.path
                            }} style={{ width: 150, height: 150, borderRadius: 10 }} />
                        </View>

                    </View>
                )
            })
        }
    }

    const renderdata = () => {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {renderSection()}
            </View>
        )
    }

    return (
        <View style={styles.Container}>
           <ScrollView>
                    {
                        renderdata()

                    }
                    {
                        renderdatass()

                    }
                    <View style={{ padding: 50 }}>

                    </View>
                </ScrollView>
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={imagepick}
                    style={styles.button}
                >
                    <Text style={styles.text}> Take Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={pickMultiple}
                >
                    <Text style={styles.text}> Choice Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UplodeImg

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    innerContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: '40%',
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#0E79B2',
    },
    text: {
        color: '#fff'
    },
    imgview: {

        width: 160,
        height: 160,
        // padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 3,
        margin: 10,
        // borderWidth: 1,
        borderColor: '#707070',
        justifyContent:'center',
        alignItems:'center'
    },
    cmstyle :{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    }
});
