import styled from '@emotion/styled'

interface Props {
  input: string
  type?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

const InputBox: React.FC<Props> = ({
  value,
  onChange,
  input,
  type = 'text',
}) => {
  return (
    <Container>
      <Label htmlFor={input}>{input}:</Label>
      <TextBox
        type={type}
        placeholder={input}
        id={input}
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}

export default InputBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 0.5rem;
`

const TextBox = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`

const Label = styled.label``