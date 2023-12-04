import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

const App = () => {
  const [receivedFiles, setReceivedFiles] = useState([]);
  console.log('these are intent recievied files', receivedFiles);
  useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      files => {
        setReceivedFiles(files);
        console.log('file is saved');
      },
      error => {
        console.log(error);
      },
      'ShareMedia',
    );
  }, []);

  const clearReceivedFiles = () => {
    setReceivedFiles([]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{color: 'black'}}>ShareIntentReceiver Component</Text>
      <Text style={{color: 'black'}} onPress={clearReceivedFiles}>
        Clear Received Files
      </Text>
      <View>
        {receivedFiles.map(item => {
          return (
            <View>
              <Image
                source={{uri: 'file://' + item.filePath}}
                style={{height: 400, width: 400}}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default App;
