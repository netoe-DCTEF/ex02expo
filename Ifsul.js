import
{
    Image,
    StyleSheet,
    View,
    Pressable,
    Nave
} from "react-native";

const __link = 'https://i0.wp.com/www.riograndetem.com.br/wp-content/uploads/2020/05/IFSul-oferta-mais-de-10-mil-vagas-para-cursos-de-qualifica%C3%A7%C3%A3o-profissional-a-dist%C3%A2ncia.png?resize=800%2C445&ssl=1' ;


function Ifsul({ navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Pressable 
            onPress={() => navigation.navigate('Página Inicial')}>

            <Image 
                source={{uri:__link}}
                style={styles.img}
            ></Image>  
        </Pressable>
             
      </View>
    );
}

const styles = StyleSheet.create({
    img:{
        height:100,
        width:300,
    }
});

export default Ifsul;