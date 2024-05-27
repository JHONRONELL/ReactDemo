export default function HTMLElements() {

    return (
        <div>
            <h1>Heading 1</h1>
            <p>Defines the most important heading.</p>

            <h2>Heading 2</h2>
            <p>Defines a level 2 heading.</p>

            <h3>Heading 3</h3>
            <p>Defines a level 3 heading.</p>

            <h4>Heading 4</h4>
            <p>Defines a level 4 heading.</p>

            <h5>Heading 5</h5>
            <p>Defines a level 5 heading.</p>

            <h6>Heading 6</h6>
            <p>Defines the least important heading.</p>


            <p>This is a paragraph.</p>
            <p>Defines a paragraph of text.</p>


            <a href="#">Link</a>
            <p>Defines a hyperlink.</p>


            <img src="image.jpg" alt="Image" />
                <p>Embeds an image in the HTML page.</p>


                <ul>
                    <li>Unordered List Item 1</li>
                    <li>Unordered List Item 2</li>
                </ul>
                <p>Defines an unordered list.</p>

                <ol>
                    <li>Ordered List Item 1</li>
                    <li>Ordered List Item 2</li>
                </ol>
                <p>Defines an ordered list.</p>


                <table>
                    <tr>
                        <td>Row 1, Column 1</td>
                        <td>Row 1, Column 2</td>
                    </tr>
                    <tr>
                        <td>Row 2, Column 1</td>
                        <td>Row 2, Column 2</td>
                    </tr>
                </table>
                <p>Defines a table structure.</p>


                <form action="/submit-form" method="post">
                    <input type="text" name="username" placeholder="Enter your username" />
                    <button type="submit">Submit</button>
                </form>
                <p>Defines an HTML form for user input.</p>


  


                <header>
                    <h1>Header</h1>
                </header>
                <p>Represents introductory content, usually containing a group of introductory or navigational aids.</p>

                <nav>
                    <ul>
                        <li>Nav Item 1</li>
                        <li>Nav Item 2</li>
                    </ul>
                </nav>
                <p>Represents a section of the document intended for navigation links.</p>

                <main>
                    <h1>Main Content</h1>
                </main>
                <p>Represents the main content of the document.</p>

                <section>
                    <h2>Section</h2>
                </section>
                <p>Represents a standalone section, which doesn't have a more specific semantic element to represent it.</p>

                <aside>
                    <h3>Aside</h3>
                </aside>
                <p>Represents a portion of the document intended for content that is tangentially related to the content around the aside element.</p>

                <footer>
                    <h4>Footer</h4>
                </footer>
                <p>Represents a footer for the section it is placed in.</p>
        </div>
    )
}