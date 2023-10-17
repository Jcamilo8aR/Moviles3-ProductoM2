import { View, Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../assets/styles/allstyles';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';


export default function User({navigation}){
    const {
        control,
        handleSubmit, reset,
        formState: { errors },
    } = useForm({ // VARIABLES DE ESTADO
        defaultValues: { 
        username: "",
        name: "",
        password: "",
        },
    })
    const onSubmit = (user) => console.log(user);  //Convierte los datos en un obejto

    let nav = (

      handleSubmit(onSubmit)
    )

    return(
    <View style={styles.container}>

            {/* CONTROLLER USUARIO */}
            <Controller
                control={control}
                rules={{
                required: true,
                maxLength:30,
                minLength:3,
                pattern:/^[ a-zA-Z-0-9]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Usuario"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    left={<TextInput.Icon icon="email" />}
                    />
                    )}
                    name="username"
                />
                {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
                {errors.username?.type == "required" && <Text style={{color:'red'}}>El usuario  es obligatorio</Text>}
                {errors.username?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
                {errors.username?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
                {errors.username?.type == "pattern" && <Text style={{color:'red'}}>Solo puede ingresar letras y números.</Text>}



                {/* CONTROLLER NOMBRE */}
                <Controller
                control={control}
                rules={{
                required: true,
                maxLength:30,
                minLength:3,
                pattern:/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Nombre"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    left={<TextInput.Icon icon="email" />}
                    />
                    )}
                    name="name"
                />
                {errors.username?.type == "required" && <Text style={{color:'red'}}>El nombre  es obligatorio</Text>}
                {errors.username?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
                {errors.username?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 10 chars.</Text>}
                {errors.username?.type == "pattern" && <Text style={{color:'red'}}>Solo puede ingresar letras y espacios.</Text>}



                 {/* CONTROLLER PASSWORD */}
                 <Controller
                control={control}
                rules={{
                required: true,
                maxLength:15,
                minLength:8,
                pattern:/^[ a-zA-Z-0-9]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Contraseña"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    left={<TextInput.Icon icon="email" />}
                    />
                                        )}
                    name="password"
                />
                {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
                {errors.username?.type == "required" && <Text style={{color:'red'}}>La contraseña es obligatorio</Text>}
                {errors.username?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 15 chars.</Text>}
                {errors.username?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 8 chars.</Text>}
                {errors.username?.type == "pattern" && <Text style={{color:'red'}}>Solo puede ingresar letras, números y caracteres especiales.</Text>}

{/* 
                <Button
                style={{ marginTop: 20, backgroundColor: 'powderblue' }}
                icon="content-save"
                mode="outlined"
                onPress={handleSubmit(onSubmit)} // handleSubmite es lo que el hook utiliza para la validacion
                >
                    Guardar
                </Button> */}

                <Button
                    style={{ marginTop: 20, backgroundColor: 'orange' }}
                    icon="login"
                    mode="outlined"
                    // onPress={handleSubmit(onSubmit)}
                >
                    Iniciar Sesión
                </Button>

                <Button
                    style={{ marginTop: 20, backgroundColor: 'yellow' }}
                    icon="account"
                    mode="outlined"
                    onPress={nav}
                >
                    Crear Cuenta
                </Button>
            </View>
)}