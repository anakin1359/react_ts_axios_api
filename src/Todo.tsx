type TodoType = {
    userId: number;
    title: string;
    completed?: boolean; // 末尾に「?」を付けることで必須ではことを示す
}

export const Todo = (props: TodoType) => {
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