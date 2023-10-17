import { View, Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function Rent({ navigation, route }) {
  const {
    control,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({ // VARIABLES DE ESTADO
    defaultValues: { 
      rentNumber: "",
      usermane: "",
      plateNumber: "",
      rentDate:""
    },
  })
  const onSubmit = (data) => console.log(data);  //Convierte los datos en un obejto
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      
      {/* CONTROLLER NUMERO RENTA */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:6,
          minLength:6,
          pattern: /^[0-9]+$/  // EXPRESION REGULAR
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de renta"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="rentNumber"
      />
      {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
      {errors.plateNumber?.type == "required" && <Text style={{color:'red'}}>El número de renta es obligatorio</Text>}
      {errors.plateNumber?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 6 chars.</Text>}
      {errors.plateNumber?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 6 chars.</Text>}
      {errors.plateNumber?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros.</Text>}


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
              />
              )}
              name="username"
          />
          {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
          {errors.username?.type == "required" && <Text style={{color:'red'}}>El usuario  es obligatorio</Text>}
          {errors.username?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
          {errors.username?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
          {errors.username?.type == "pattern" && <Text style={{color:'red'}}>Solo puede ingresar letras y números.</Text>}
      


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
      

      
      {/* CONTROLLER FECHA RENTA */}
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
            label="Fecha Renta"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="rentDate"
      />
      {/* DEBEMOS CREAR ERRORES POR CADA REGLA */}
      {errors.rentDate?.type == "required" && <Text style={{color:'red'}}>El nombre completo  es obligatorio</Text>}
      {errors.rentDate?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
      {errors.rentDate?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
      {errors.rentDate?.type == "pattern" && <Text style={{color:'red'}}>Solo puede ingresar letras y espacios.</Text>}
      

      
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