'use client'

- import { supabase } from '../../lib/supabaseClient'
+ import { supabase } from '../../lib/supabaseClient'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [pw, setPw]       = useState('')

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password: pw })
    if (error) alert(error.message)
    else alert('Проверьте почту для подтверждения')
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw })
    if (error) alert(error.message)
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Вход / Регистрация</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', margin: '8px 0' }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={pw}
        onChange={e => setPw(e.target.value)}
        style={{ width: '100%', margin: '8px 0' }}
      />
      <div style={{ display: 'flex', gap: '4%' }}>
        <button onClick={signIn} style={{ flex: 1 }}>Войти</button>
        <button onClick={signUp} style={{ flex: 1 }}>Зарегистрироваться</button>
      </div>
    </div>
  )
}
