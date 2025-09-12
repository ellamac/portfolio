![Screenshot from the calendar app's Figma](/portfolio/imgs/kalenteri.png)

# Calendar application with React

*I developed an alternative way to create events in the phone's calendar. I designed the user interface with Figma and implement the prototype with React.*

The creation of events is based on the syntax previously defined by the user. The user writes all the information of the event into one text-input, from which the application parses parts into the ics. file.

[Linkki Figma-prototyyppiin (staattinen)](https://www.figma.com/proto/ezpw8anPnwEm3y2zpvIj71/Untitled?type=design&node-id=2-4300&t=gsdGfdfZ04D9sWd0-1&scaling=min-zoom&page-id=0%3A1&mode=design)

![Screenshot from the calendar app's Figma](/portfolio/imgs/kalenteri.png)
*First draft of UI*

## Technical implementation

I tried Vite for the first time instead of create-react-app. I also decided to brush up my Typescript, so the final combination was React + TypeScript + Vite. The code can be found on [Github](https://github.com/ellamac/regex-events) and the working page at <https://ellamac.github.io/regex-events/>.

The page works best on iPhone and Safari, which handle downloading and adding .ics files to Apple Calendar in a straightforward manner. Chrome and the desktop browser also work, but adding the downloaded file to your calendar is not automated accordingly.

The user writes the information of the desired event in the text box following the standard syntax. The program parses the details of the event from the text and visualizes the event in the preview and creates an .ics file from the parsed information. The program is in Finnish and follows the Finnish way of marking dates and times.

As a further development, it could be possible for the user to define the syntax with which the event is written in the text field as well as the selection of the time zone.

![Screenshot from Safari iPhone 13 mini](portfolio/imgs/kalenteri-ss-pysty.png)
*Screenshot from Safari iPhone 13 mini*