// Subcomponents
import ListContainer from "./subcomponents/container"
import ListItem from "./subcomponents/item"

// Interfaces
import ListInterface from "./interfaces"

const List = ListContainer as unknown as ListInterface
List.Item = ListItem as any

export default List