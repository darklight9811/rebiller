type props = { children: JSX.Element | JSX.Element[] | string | number | any }

export default interface ListProps {
	(props: props): JSX.Element;

	Item: (props: props) => JSX.Element;
}