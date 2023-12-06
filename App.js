import {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View, Modal} from 'react-native';
import uuid from 'react-native-uuid';
import ModalDelete from './src/components/ModalDelete';
import TaskList from './src/components/TaskList';

const App = () => {
    const [newTitleProduct, setNewTitleProduct] = useState("")
    const [tasks,setProducts] = useState([])
    const [productSelected,setProductSelected] = useState({})
    const [modalVisible,setModalVisible] = useState(false)
    
    const handlerAddProduct = () => {
        const newProduct = {
            id: uuid.v4(),
            title: newTitleProduct
        }
        setProducts(current => [
            ...current,
            newProduct
        ])
        setNewTitleProduct("")
    }
    const handlerModal = (item) => {
        setProductSelected(item)
        setModalVisible(true)
    }
    const handlerDeleteTask = () => {
        setProducts(current => current.filter(product => product.id !== productSelected.id))
        setModalVisible(false)
    }
    return <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Ingrese su tarea'
                onChangeText={(t) => setNewTitleProduct(t)}
                value={newTitleProduct}/><Button title="ADD" onPress={handlerAddProduct}/>
        </View>
        <TaskList
                tasks = {tasks}
                onModal = {handlerModal}
        />
        <ModalDelete
                product = {productSelected}
                visible={modalVisible}
                onModal = {handlerModal}
                onDelete={handlerDeleteTask}
        />      
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "GGG",
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
        marginTop: 42
    },
    text: {
        color: "black"
    },
    input: {
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        padding: 25,
        justifyContent: 'center'
    },
    listContainer: {
        backgroundColor: "GGG",
        width: "100%"
    },
    cardProduct: {
        /*backgroundColor:"blue",*/
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1
    },
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    modalContent:{
        width:"80%",
        borderWidth:2,
        padding:10,
        gap:10
    },
    modalText:{
        textAlign:"center"
    }    
})
export default App