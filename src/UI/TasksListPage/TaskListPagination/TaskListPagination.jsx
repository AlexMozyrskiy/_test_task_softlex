import React from "react";
import styles from "./TaskListPagination.module.css";

export const TaskListPagination = () => {
    return (
        <div className={styles.task_list__pagination-wrapper}>
                { /* Если цифры в квадратиках пагинации начинаются не с 1 покажем стрелку влево для пагинации на одну страницу назад */}
                {
                    props.currentPage === 1 ? null : <span className={styles.task_list__pagination-single-span} onClick={() => props.onPaginationSquareClick(props.currentPage - 1)}>&larr;</span>
                }

                { /* Если цифры в квадратиках пагинации начинаются не с 1 покажем перед троеточием квадратик с цифрой 1 */}
                {
                    props.paginationSquareNumbers[0] === 1 ? null : <span className={styles.task_list__pagination-single-span} onClick={() => props.onPaginationSquareClick(1)}>1</span>
                }

                { /* Если цифры в квадратиках пагинации начинаются не с 1 покажем троеточие */}
                {
                    props.paginationSquareNumbers[0] === 1 ? null : <span className={styles.task_list__pagination-single-span}>...</span>
                }

                { /* Мапим массив с цифрами для квадратиков */}
                {
                    props.paginationSquareNumbers.map(item => <span
                        key={item}
                        onClick={() => props.onPaginationSquareClick(item)}
                        className={`${styles.task_list__pagination-single-span} ${item === props.currentPage ? styles.task_list__pagination-single-span_active : null}`}>
                        {item}
                    </span>)
                }

                { /* Если это последний возможный квадратик покажем троеточие */}
                {
                    props.paginationSquareNumbers[(props.paginationSquareNumbers.length - 1)] === props.totalCountPaginationSquares ? null : <span className={styles.task_list__pagination-single-span}>...</span>
                }

                { /* Если это последний возможный квадратик покажем последний возможный квадратик для джампа на последнюю страницу */}
                {
                    props.paginationSquareNumbers[(props.paginationSquareNumbers.length - 1)] === props.totalCountPaginationSquares ? null : <span className={styles.task_list__pagination-single-span} onClick={() => props.onPaginationSquareClick(props.totalCountPaginationSquares)}>{props.totalCountPaginationSquares}</span>
                }

                { /* Если это последний возможный квадратик стрелку вправо не покажем */}
                {
                    props.currentPage === props.totalCountPaginationSquares ? null : <span className={styles.task_list__pagination-single-span} onClick={() => props.onPaginationSquareClick(props.currentPage + 1)}>&rarr;</span>
                }
            </div>
    );
}