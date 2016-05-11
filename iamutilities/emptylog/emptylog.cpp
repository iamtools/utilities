// truncateCCSLog.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>
#include <iomanip>
#include <fstream>
using std::ofstream;
using std::wcout;
using std::endl;
using std::filebuf;
int _tmain(int argc, _TCHAR* argv[])
{
	if (argc>=2)
	{
		wcout<<argv[1]<<" is to be emptied..."<<endl;
		ofstream log;
		log.open(argv[1], ofstream::out|ofstream::trunc);
		if (log.fail()) 
		{
			wcout<<"open "<<argv[1]<<" failed"<<endl;
		}else{
			wcout<<"Done!"<<endl;
		}
		log.close();
	}else{
		wcout<<"Empty a log file."<<endl<<endl<<argv[0]<<" filename"<<endl;
	}

	return 0;
}

