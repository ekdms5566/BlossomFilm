import * as S from "./style"

export default function Button({ text, className, onclick }) {
  return (

    <S.Button className={className} onClick={onclick}>
      {text}
    </S.Button>
  )
}
