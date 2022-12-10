import
{
    TextInput,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
}
from "react-native";

const IMGURLS =[{}];
function Calc({navigation}){
    let n1,n2;
    let resultado;
    const __buf = "O resultado será:";

    const setN1 = (_n1) =>{
        n1 = _n1;
    }

    const setN2 = (_n2) =>{
        n2 = _n2;
    }

    const somar = ()=>{
        alert(__buf + (n1+n2).toString());
    }

    const multiplicar = ()=>{
        alert(__buf + (n1*n2).toString());
    }

    const dividir = ()=>{
        alert(__buf + (n1/n2).toString());
    }

    const subtrair = ()=>{
        alert(__buf + (n1-n2).toString());
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style = {styles.txtTitulo}>Calculadora</Text>
            <TextInput 
                placeholder="Digite o número 1 aqui"
                style = {styles.inputs}
                onChangeText={n1 = setN1(n1)}
            > 
            </TextInput>

            <TextInput 
                placeholder="Digite o número 2 aqui"
                style = {styles.inputs}
                onChangeText={n2 => setN2(n2)}
            > 
            </TextInput>

      </View>
    );

}

const styles = StyleSheet.create({
    inputs:{
        marginVertical:5,
        width:300,
        height:50,
        borderColor: 'black',
        borderWidth:0.5,
        paddingHorizontal:15,
    },

    txtTitulo:{
        fontSize:50,
        fontWeight:'bold',
        marginBottom:30,
    },
    logoImgs:{
        width:300,
        height:300,
        resizeMode: 'contain'
    },
});

export default Calc;
