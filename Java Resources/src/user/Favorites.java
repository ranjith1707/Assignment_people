//$Id$
package user;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Favorites {
	
	public static void main(String[] args) {
		new Favorites().getFavoritesList();
	}
  public String getFavoritesList() {
	  String fList="";
	  String path="/Users/Shared/Html/favorites.txt";
	  try {
		  File file=new File(path);
		  FileReader fileReader=new FileReader(file);
		  BufferedReader buffer=new BufferedReader(fileReader);
		  String data=buffer.readLine();
		  while(data!=null) {
			  fList+=data;
			  data=buffer.readLine();
			  
		  }
		  
	  }
	  catch(Exception e) {
		  e.printStackTrace();
	  }
	  System.out.println (fList);
	  return fList;
  }
}
