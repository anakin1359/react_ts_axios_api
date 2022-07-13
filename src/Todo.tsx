import { TodoType } from "./types/todo"

// export const Todo = (props: TodoType) => {
export const Todo = (
    // props: Pick<TodoType, "userId" | "title" | "completed">
    props: Omit<TodoType, "id"> // TodoTypeからid型のみ除外して型参照
    ) => {
    const {
        title,
        userId,
        completed = false // 必須ではないことを明示する場合は、初期値を設定しておくのがbetter
    } = props;
    const completeMark = completed ? "[完]" : "[未]";

    return (
        <p>{`${completeMark} ${title}(ユーザ:${userId})`}</p>
    )
}