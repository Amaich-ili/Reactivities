import { Duck } from "./demo"

interface Props {
    duck: Duck
}


// export default function DuckItem(props: Props) {
//     //Or we extrat the propriety duck from the interafece by {duck}

//     return (
//         <div key={props.duck.name}>
//             <span>{props.duck.name}</span>
//             <button onClick={() => props.duck.makeSound(props.duck.name + ' quack')}>make Sound</button>
//         </div>
//     )
// }

//Or we extrat the propriety duck from the interafece by {duck}
export default function DuckItem({duck}: Props) {
    

    return (
        <div key={duck.name}>
            <span>{duck.name}</span>
            <button onClick={() => duck.makeSound(duck.name + ' quack')}>make Sound</button>
        </div>
    )
}
