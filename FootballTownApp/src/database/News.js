export default class News {

    constructor(){
        this.news = [
            {
                id: "00001",
                title: "Arsenal won",
                text: "Lorem Ipsum dolemar et",
                except: "Arsenaö wins, it was a cool match"
            },
            {
                id: "00002",
                title: "United lost",
                text: "United lost today, sorry",
                newsStoryImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
            },
            {
                id: "00003",
                title: "Elfborg wins",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum, dui eget eleifend commodo, nisi dolor pretium nibh, ac sollicitudin nulla tellus ut elit. In elementum quis justo a ornare. Morbi laoreet placerat metus, tempor commodo elit laoreet eget. Quisque magna sem, facilisis nec commodo rutrum, viverra et lorem. Ut maximus iaculis metus, ut condimentum lorem interdum eget. Maecenas ac neque tellus. Vivamus ut leo odio. Pellentesque iaculis magna erat, nec venenatis enim feugiat et  "
                 + "Aenean bibendum maximus purus eu sagittis. Nullam tempor nisi non odio volutpat sollicitudin. Nullam lacinia mi non ante viverra, nec blandit nisl pretium. Vivamus eleifend libero vel mauris tempor efficitur. Sed lobortis mauris ac magna posuere, sit amet dictum lorem luctus. Praesent volutpat, nulla ac molestie placerat, quam dolor iaculis ligula, et facilisis enim augue pretium velit. Nunc vitae augue dolor. Vestibulum ut nisl sodales, placerat lectus non, vestibulum diam. Maecenas consequat tempor quam, id pellentesque lectus porta a." 
                 + "In magna lacus, malesuada hendrerit dapibus nec, luctus eget metus. Vestibulum id nunc et mi hendrerit varius. Morbi quis est laoreet, ultrices dui egestas, hendrerit nisl. Maecenas vehicula vehicula lobortis. Etiam imperdiet ac leo sit amet pellentesque. Aliquam erat volutpat. Duis lacinia lacinia lacus, ut finibus metus placerat eu. Sed in mauris id sapien fermentum facilisis ac sit amet libero. Maecenas elementum lacus nisl, quis facilisis",
                
            }
        ]
    }

    addNews(tmpNews){
      this.news.push(tmpNews);
    }

    removeNews(id){
      for (const i = 0; i < this.news.lengconst; i++) {
        if (this.news[i].id === id){
          this.news.splice(i, 1);
        }
      }
    }

    updateNews(tmpNews){
      for (const i = 0; i < this.news.lengconst; i++) {
        if (this.news[i].id === id){
          this.news[i] = tmpNews;
        }
      }
    }

    getNews(){
      return this.news;
    }
};
