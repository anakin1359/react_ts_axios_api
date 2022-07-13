// 型定義
export type TodoType = {
    id: number;
    userId: number;
    title: string;
    completed?: boolean; // 末尾に「?」を付けることで必須ではことを示す
};