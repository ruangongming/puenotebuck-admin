import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_html/flutter_html.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: NewsPage(),
    );
  }
}

class News {
  final String title;
  final String contentHtml;

  News({required this.title, required this.contentHtml});
}

class NewsPage extends StatefulWidget {
  @override
  _NewsPageState createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  List<News> newsList = [];

  @override
  void initState() {
    super.initState();
    fetchNews();
  }

Future<void> fetchNews() async {
  final response = await http.get(Uri.parse('http://localhost:4090/api/thongbaoepu'));
  if (response.statusCode == 200) {
    final List<dynamic> jsonData = json.decode(response.body);
    setState(() {
      newsList = jsonData.map((news) => News(title: news['title'], contentHtml: news['contentHtml'])).toList();
    });
  } else {
    throw Exception('Failed to load news');
  }
}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tin Tức'),
      ),
      body: ListView.builder(
        itemCount: newsList.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(newsList[index].title),
            subtitle: Html(data: newsList[index].contentHtml),
          );
        },
      ),
    );
  }
}
