import * as S from "./style"

export default function Button({ text, className }) {
  return (

    <S.Button className={className}>
      {text}
    </S.Button>
  )
}
