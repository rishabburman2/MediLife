import React, { useState, useCallback } from "react";
import { Text, Image, View, FlatList, StyleSheet, useWindowDimensions } from "react-native";

const ImageCarousel = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0)
    const windowWidth = useWindowDimensions().width

    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        // console.warn(viewableItems)
        if (viewableItems.length > 0) {
            setActiveImage(viewableItems[0].index || 0)
        }
    }, []);
    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image style={[styles.image, { width: windowWidth - 40 }]} source={item} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dotView}>
                {images.map((image, index) => (
                    <View
                        style={[
                            styles.dot,
                            {
                                backgroundColor: index === activeImage ? '#c9c9c9' : '#ededed'
                            }
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 350,
        resizeMode: 'contain',
    },
    dotView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#c9c9c9",
        backgroundColor: "#ededed",
        margin: 5,
    }
})

export default ImageCarousel;