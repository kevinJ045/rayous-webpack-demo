import { Button, Column, Container, Text, Widget } from "rayous";
import { Controller, Style } from "rayous/extra";

const body = Widget.from(document.body);

body.style = new Style('bodyStyle', {
	background: Style.linearGradient("140deg", "#052FE9", "#ff009b"),
	color: 'white',
	fontFamily: 'Inter',
	margin: '0'
});

const quote = new Controller('Loading quote..');

const fetchQuote = () => fetch('https://api.quotable.io/random')
.then(response => response.json())
.then(json => quote.set(json.content));

const containerStyle = new Style({
	textAlign: 'center',
	width: Style.px(400),
	maxWidth: '80%',
	background: 'rgba(255, 255, 255, 0.3)',
	padding: [Style.px(10), Style.px(25)],
	boxSizing: 'border-box',
	borderRadius: '25px',
	backdropFilter: 'blur(20px)'
});

body.add(
	new Column({
		size: { height: '100vh' },
		mainAxisAlignment: 'center',
		crossAxisAlignment: 'center',
		children: [
			new Container({
				style: containerStyle,
				children: [
					new Text('Quote', {
						style: new Style('title', {
							fontSize: Style.px(44),
							fontWeight: '500'
						})
					}),
					new Text('Of the day.', {
						style: new Style({
							fontSize: '12px',
							opacity: '.7',
							fontWeight: '700',
							borderBottom: '2px solid white',
							paddingBottom: '10px'
						})
					}),
					new Text({ text: quote, style: { marginTop: '10px' } }),
					new Button('Another!', {
						style: new Style({
							border: '0',
							margin: Style.px(10),
							padding: ['5px', '10px'],
							borderRadius: '25px',
							cursor: 'pointer',
							background: '#ff00d4',
							color: 'white',
							fontWeight: 'bolder',
						}),
						onClick(){
							fetchQuote();
						}
					})
				]
			})
		]
	})
)

fetchQuote();