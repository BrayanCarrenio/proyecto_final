//funcion asyncronica para enlazar todos los elementos, guarda en constante para su posterior manipulación
document.addEventListener('DOMContentLoaded', ()=>{ 
    async function handleRegister(e){
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password =  document.getElementById('password').value;

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
        const email = document.getElementById('emaillog').value;
        const password =  document.getElementById('passwordlog').value;

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

    document.getElementById('registrar').addEventListener('submit', handleRegister);
    document.getElementById('ingresar').addEventListener('submit', handleLogin);
})