type ErrorMessage = string

interface Form {
    nombre:string,
    email:string,
    mensaje:string
}

export function handleErrorForm(form:Form):ErrorMessage | undefined {
    
    if(form.nombre.length === 0) return 'error-messages.empty-name'
    if(form.nombre.length <= 2) return 'error-messages.short-message'
    if(form.nombre.length > 25) return 'error-messages.long-message'
	if (form.email.length === 0) return 'error-messages.empty-email';
	if (!form.email.includes('@')) return "error-messages.not@";
	if (form.email.length > 75) return 'error-messages.short-email';
	const regEx =
		/^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regEx.test(form.email)) return 'error-messages.invalid-email';
    if(form.mensaje.length === 0) return 'error-messages.empty-message'
    if(form.mensaje.length <= 25) return 'error-messages.short-message'
    if(form.mensaje.length > 255 ) return 'error-messages.long-message'
    return;
}

