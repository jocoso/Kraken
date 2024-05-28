#include <iostream>
#include <string>

using namespace std;

struct Object {
    string name;
    string desc;
};

class Engine {
    public:
        string usrInput;
    protected:
    private:
        string process(string input) {
            return input;
        }

        string getUserInput() {
            return "quit";
        }

    public:
        void run() {
                while((usrInput = this.getUsrInput()).compare("quit") != 0) {
                this.usrInput = this.process(usrInput);
                cout << this.usrInput << endl;
            }
        }
};

int main() {
    
    Engine e;
    e.run();

    return 0;
}