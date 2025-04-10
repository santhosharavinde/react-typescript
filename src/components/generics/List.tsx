type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
    renderItem: (item: T) => React.ReactNode
}

const List = <T extends {}> ({items, onClick, renderItem}: ListProps<T>) => {
  return (
    <div>
        <h2>List of Items</h2>
        {items.map((item, index) => {
            return (
                <div key={index} onClick={() => onClick(item)}>{renderItem(item)}</div>
            )
        })}
    </div>
  )
}

export default List