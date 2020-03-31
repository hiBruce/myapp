package com.myapp;

import android.os.Environment;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  String sdPath = Environment.getExternalStorageDirectory().getAbsolutePath()+"/songshucang";
  String picPath = sdPath + "/" + "temp.png";
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "myapp";
  }

//  @Override
//  protected void onCreate(Bundle savedInstanceState) {
//    super.onCreate(savedInstanceState);
//    toOpenCamera();
//  }

//  public void toOpenCamera(){
//    Intent intent2 = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
//    Uri uri = Uri.fromFile(new File(picPath));
//    //为拍摄的图片指定一个存储的路径
//    intent2.putExtra(MediaStore.EXTRA_OUTPUT, uri);
//    startActivityForResult(intent2, 1);
//  }
}
