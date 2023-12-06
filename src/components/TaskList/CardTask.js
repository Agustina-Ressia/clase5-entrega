import {View , Text , Button,StyleSheet } from "react-native"

const CardTask = ({item,onModal}) => {
    return <View style={styles.cardTask}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Button title="DEL" onPress={() => onModal(item)}/>
            </View> 
}
const styles = StyleSheet.create({
    cardTask:{
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:4
    }
})
export default CardTask