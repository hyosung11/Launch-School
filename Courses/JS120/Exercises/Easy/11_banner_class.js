/* JS120 - Object Oriented JavaScript > Easy > 11. Banner Class

Banner Class

Behold this incomplete class for constructing boxed banners. */

// class Banner {
//   constructor(message) {}

//   displayBanner() {
//     console.log(
//       [
//         this.horizontalRule(),
//         this.emptyLine(),
//         this.messageLine(),
//         this.emptyLine(),
//         this.horizontalRule(),
//       ].join('\n')
//     );
//   }

//   horizontalRule() {}

//   emptyLine() {}

//   messageLine() {
//     return `| ${this.message} |`;
//   }
// }

/* Complete this class so that the test cases shown below work as intended. You are free to add any properties you need.

You may assume that the input will always fit in your terminal window.

Test Cases */

// let banner1 = new Banner('To boldly go where no one has gone before.');
// banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// let banner2 = new Banner('');
// banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+

class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log(
      [
        this.horizontalRule(),
        this.emptyLine(),
        this.messageLine(),
        this.emptyLine(),
        this.horizontalRule(),
      ].join('\n')
    );
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+

/*  Discussion

Our solution simply adds a property `message` where we store the message that will be bannerized, and then fills out the `emptyLine` and `horizontalRule` methods for constructing the first, second, fourth, and fifth lines of the banner. The only tricky part in these two methods is remembering to allow for extra characters to the left and right so everything is aligned.

Further Exploration

Modify this class so that constructor will optionally let you specify a fixed banner width at the time the Banner object is created. The message in the banner should be centered within the banner of that width. Decide for yourself how you want to handle widths that are either too narrow or too wide.

Bob Rodes

This one implements the modifications in the further exploration section. I have a wordWrap method that wraps the string on a word basis (doesn't break up words) unless a single word is too long to fit in a narrow box. In that case it breaks the word and hyphenates it — without adhering to hyphenation rules; it just puts a hyphen wherever in the word once no more of the word will fit on the line.

The method returns a word-wrapped string rather than an array of lines. It probably would have been better to return an array in this case, since I had to split it up in messageLine to put the borders and padding in. But I borrowed this from when I did the problem in Ruby a couple of years ago, and I did it as a string. So it was easier to keep it that way.

The messageLine method does a little heavy lifting as well, working out the borders and how much spacing on each side of the line is necessary to center it. */

class Banner {
  constructor(message, width = message.length) {
    this.message = message;
    this.width = width;
  }

  displayBanner() {
    console.log([
      this.horizontalRule(), this.emptyLine(), this.messageLine(), 
      this.emptyLine(), this.horizontalRule()].join("\n")
    );
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.width)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.width)} |`;
  }

  messageLine() {
    return this.wordWrap()
      .split('\n')
      .map(line => {
        let leftPad = `${' '.repeat((this.width - line.length) / 2)}`;
        return `| ${(leftPad + line).padEnd(this.width, ' ')} |`;
      })
      .join('\n');
  }

  wordWrap() {
    let wrapped = '';
    let idx1 = 0;
    let idx2 = this.width - 1;

    while (idx1 < this.message.length - this.width) {
      let nextSpaceIndex =
        this.message.substring(idx1, idx1 + this.width + 1).lastIndexOf(' ');

      if (nextSpaceIndex === -1) { // hyphenates long words in narrow boxes
        idx2 = idx1 + this.width - 1;
        wrapped += this.message.substring(idx1, idx2) + "-\n";
        idx1 = idx2;
      } else {
        idx2 = idx1 + nextSpaceIndex;
        wrapped += this.message.substring(idx1, idx2) + "\n";
        idx1 = idx2 + 1;
      }
    }

    wrapped += this.message.substring(idx1);

    return wrapped;
  }
}

let string =
'Four score and seven years ago, our fathers brought forth ' +
'upon this continent a new nation, conceived in liberty, and ' +
'dedicated to the principle that all men are created equal.';

let banner = new Banner(string, 40);
banner.displayBanner();

banner = new Banner(string, 20);
banner.displayBanner();

banner = new Banner(string, 7);
banner.displayBanner();

// +------------------------------------------+
// |                                          |
// |   Four score and seven years ago, our    |
// |     fathers brought forth upon this      |
// |   continent a new nation, conceived in   |
// | liberty, and dedicated to the principle  |
// |     that all men are created equal.      |
// |                                          |
// +------------------------------------------+
// +----------------------+
// |                      |
// | Four score and seven |
// |    years ago, our    |
// |   fathers brought    |
// |   forth upon this    |
// |   continent a new    |
// | nation, conceived in |
// |     liberty, and     |
// |   dedicated to the   |
// |  principle that all  |
// |   men are created    |
// |        equal.        |
// |                      |
// +----------------------+
// +---------+
// |         |
// |  Four   |
// |  score  |
// |   and   |
// |  seven  |
// |  years  |
// |  ago,   |
// |   our   |
// | fathers |
// | brought |
// |  forth  |
// |  upon   |
// |  this   |
// | contin- |
// |  ent a  |
// |   new   |
// | nation, |
// | concei- |
// | ved in  |
// | libert- |
// | y, and  |
// | dedica- |
// | ted to  |
// |   the   |
// | princi- |
// |   ple   |
// |  that   |
// | all men |
// |   are   |
// | created |
// | equal.  |
// |         |
// +---------+