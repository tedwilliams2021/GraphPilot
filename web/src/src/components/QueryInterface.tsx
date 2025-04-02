import styled from '@emotion/styled'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0052a3;
  }
`

interface QueryInterfaceProps {
  onSubmit: (query: string) => void
}

const QueryInterface: React.FC<QueryInterfaceProps> = ({ onSubmit }) => {
  const [query, setQuery] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query.trim())
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter node ID (e.g., 0x1)"
        />
        <Button type="submit">Start</Button>
      </form>
    </Container>
  )
}

export default QueryInterface