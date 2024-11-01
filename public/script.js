//funcion asyncronica para enlazar todos los elementos, guarda en constante para su posterior manipulación
document.addEventListener('DOMContentLoaded', ()=>{ 
    async function handleRegister(e){
        e.preventDefault();
        const username = document.getElementById('usuario').value;
        const email = document.getElementById('correo').value;
        const password =  document.getElementById('contraseña').value;

        try{
            const res = await fetch('http://localhost:5000/api/auth/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password})
            });
            const data = await res.json();
            if(res.status == 200){
                alert('Registro Exitoso');
            }else{
                alert(`Error al registrar ${data.msg}`);
            }
        }catch(error){
            console.error(error);
            alert('Error de registro de usuario');
        }
    }

    async function handleLogin(e){
        e.preventDefault();
        const email = document.getElementById('correo_iniciar_sesion').value;
        const password =  document.getElementById('contraseña_iniciar_sesion').value;

        try{
            const res = await fetch('http://localhost:5000/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
            });
            const data = await res.json();
            if(res.status == 200){
                alert('Login Exitoso');
            }else{
                alert(`Error al ingresar ${data.msg}`);
            }
        }catch(error){
            console.error(error);
            alert('Error de inicio de sesión');
        }
    }

    document.getElementById('registro').addEventListener('submit', handleRegister);
    document.getElementById('inicio_de_sesion').addEventListener('submit', handleLogin);
})