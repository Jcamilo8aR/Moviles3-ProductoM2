import { View, Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function Car({ navigation, route }) {
  const {
    control,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({ // VARIABLES DE ESTADO
    defaultValues: { 
      plateNumber: "",
      brand: "",
      state: ""
    },
  })
  
  const onSubmit = (car) => console.log(car);  //Convierte los datos en un obejto
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Bienvenid@ {route.params.email}</Text> */}
      
      
      {/* CONTROLLER PLACA */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:6,
          minLength:6,
          pattern: /^[a-zA-Z-0-9]+$/  // EXPRESION REGULAR
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de Placa"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="plateNumber"
      />
      {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
      {errors.plateNumber?.type == "required" && <Text style={{color:'red'}}>El número de placa es obligatorio</Text>}
      {errors.plateNumber?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 6 chars.</Text>}
      {errors.plateNumber?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 6 chars.</Text>}
      {errors.plateNumber?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros y letras.</Text>}
      

      
      {/* CONTROLLER MARCA */}
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
            label="Marca"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="brand"
      />
      {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
      {errors.brand?.type == "required" && <Text style={{color:'red'}}>El nombre completo  es obligatorio</Text>}
      {errors.brand?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
      {errors.brand?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
      {errors.brand?.type == "pattern" && <Text style={{color:'red'}}>Solo puede ingresar letras y espacios.</Text>}
      

      
      {/* CONTROLLER ESTADO*/}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:30,
          minLength:7,
          pattern:/^[a-zA-Z]/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Estado"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="state"
      />
      {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
      {errors.state?.type == "required" && <Text style={{color:'red'}}>El estado  es obligatorio</Text>}
      {errors.state?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
      {errors.state?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 7 chars.</Text>}
      {errors.state?.type == "pattern" && <Text style={{color:'red'}}>Ingrese una direccion de correo valida (ejemplo@ejemplo.com)</Text>}
      
      
      <Button
          style={{ marginTop: 20, backgroundColor: 'powderblue' }}
          icon="content-save"
          mode="outlined"
          onPress={handleSubmit(onSubmit)} // handleSubmite es lo que el hook utiliza para la validacion
          >
            Guardar
          </Button>
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
}