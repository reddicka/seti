import { FC } from "react"
import styles from "./Post.module.css"


export const Post: FC = () => {
    return (
        <div className={styles.post}>
            <h3 className={styles.title}>ПОСТ</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi exercitationem, harum illum
                impedit itaque, laboriosam libero maxime nesciunt odit similique totam ut voluptate? Amet eius id non
                quasi rem!
            </p>
        </div>
    )
}